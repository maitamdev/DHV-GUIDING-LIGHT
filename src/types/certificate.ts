export interface Certificate { id: string; userId: string; courseId: string; courseName: string; issueDate: string; expiryDate?: string; certificateNumber: string; grade: number; templateId: string; verificationUrl: string; skills: string[]; }
export interface CertificateTemplate { id: string; name: string; background: string; layout: 'classic' | 'modern' | 'minimal'; }
