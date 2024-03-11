import ClientComponent from '@/components/common/ClientComponent';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const ServerCompA = async () => {
  return (
    <div className='mb-5'>
      <h2>Server Comp B</h2>
      <ClientComponent />
    </div>
  );
};

export default ServerCompA;
