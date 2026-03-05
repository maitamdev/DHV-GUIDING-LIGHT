import { usePageTitle } from '../hooks/usePageTitle';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const plans = [
  { name: 'Free', price: 0, features: ['Access to 5 free courses', 'Community access', 'Basic roadmaps', 'Limited blog access'], cta: 'Get Started', popular: false },
  { name: 'Pro', price: 29, features: ['Unlimited courses', 'AI Mentor matching', '1-on-1 meetings', 'Portfolio builder', 'Certificates', 'Priority support'], cta: 'Start Pro Trial', popular: true },
  { name: 'Team', price: 99, features: ['Everything in Pro', 'Team analytics', 'Custom roadmaps', 'Admin dashboard', 'API access', 'Dedicated support'], cta: 'Contact Sales', popular: false },
];
const Pricing = () => { usePageTitle('Pricing');
  return (<div className='min-h-screen bg-gray-50 pt-24 pb-16'><div className='container mx-auto px-4 max-w-5xl'>
    <div className='text-center mb-12'><h1 className='text-4xl font-bold text-gray-900 mb-4'>Simple Pricing</h1><p className='text-lg text-gray-600'>Choose the plan that fits your learning journey</p></div>
    <div className='grid md:grid-cols-3 gap-8'>{plans.map((p, i) => (
      <div key={i} className={'bg-white rounded-2xl p-8 shadow-sm border-2 relative ' + (p.popular ? 'border-blue-600 shadow-xl scale-105' : 'border-gray-100')}>
        {p.popular && <span className='absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full'>Most Popular</span>}
        <h3 className='text-xl font-bold text-gray-900'>{p.name}</h3>
        <div className='mt-4 mb-6'><span className='text-4xl font-bold text-gray-900'></span><span className='text-gray-500'>/month</span></div>
        <ul className='space-y-3 mb-8'>{p.features.map((f, j) => (<li key={j} className='flex items-center gap-2 text-sm text-gray-600'><FaCheck className='text-green-500 flex-shrink-0' />{f}</li>))}</ul>
        <Link to='/signup' className={'block text-center py-3 rounded-xl font-semibold transition-colors ' + (p.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50')}>{p.cta}</Link>
      </div>
    ))}</div>
  </div></div>);
};
export default Pricing;
