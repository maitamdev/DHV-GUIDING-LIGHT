import { db } from '../config/firebase';
import { collection, doc, getDocs, query, where, orderBy, limit, addDoc, updateDoc, increment } from 'firebase/firestore';
import type { BlogPost, BlogComment } from '../types/blog';

const BLOG_COLLECTION = 'blog_posts';

export const getBlogPosts = async (category?: string, postLimit: number = 10): Promise<BlogPost[]> => {
  try {
    let q = query(collection(db, BLOG_COLLECTION), orderBy('publishedAt', 'desc'), limit(postLimit));
    if (category) q = query(collection(db, BLOG_COLLECTION), where('category', '==', category), orderBy('publishedAt', 'desc'), limit(postLimit));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as BlogPost));
  } catch (error) { console.error('Error fetching blog posts:', error); return []; }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const q = query(collection(db, BLOG_COLLECTION), where('slug', '==', slug), limit(1));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    const docData = snapshot.docs[0];
    await updateDoc(doc(db, BLOG_COLLECTION, docData.id), { views: increment(1) });
    return { id: docData.id, ...docData.data() } as BlogPost;
  } catch (error) { console.error('Error fetching blog post:', error); return null; }
};

export const addBlogComment = async (postId: string, comment: Omit<BlogComment, 'id'>): Promise<void> => {
  try { await addDoc(collection(db, 'blog_comments'), { ...comment, postId, createdAt: new Date().toISOString() }); }
  catch (error) { console.error('Error adding comment:', error); throw error; }
};

export const searchBlogPosts = async (searchQuery: string): Promise<BlogPost[]> => {
  try {
    const snapshot = await getDocs(collection(db, BLOG_COLLECTION));
    const posts = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as BlogPost));
    const lowerQuery = searchQuery.toLowerCase();
    return posts.filter(p => p.title.toLowerCase().includes(lowerQuery) || p.excerpt.toLowerCase().includes(lowerQuery));
  } catch (error) { console.error('Error searching blog:', error); return []; }
};
