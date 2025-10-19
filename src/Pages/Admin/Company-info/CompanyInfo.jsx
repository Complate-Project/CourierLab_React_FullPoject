import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const CompanyInfo = () => {
  useTitle('Admin Dashboard | Company info');
  return (
    <div>
      <p className="text-black">Company-info</p>
    </div>
  );
};

export default CompanyInfo;
