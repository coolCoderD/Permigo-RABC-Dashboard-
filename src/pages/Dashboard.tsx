import React from 'react';
import { Users, Shield, Key, AlertTriangle } from 'lucide-react';

const stats = [
  { name: 'Total Users', value: '120', icon: Users, color: 'bg-blue-500' },
  { name: 'Active Roles', value: '8', icon: Shield, color: 'bg-green-500' },
  { name: 'Permissions', value: '24', icon: Key, color: 'bg-purple-500' },
  { name: 'Pending Actions', value: '3', icon: AlertTriangle, color: 'bg-yellow-500' },
];

const Dashboard = () => {
  return (
    <div  className=''>
      <div className=''>
      <h1 className="text-5xl font-black text-white">Dashboard Overview</h1>
      
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className={`absolute rounded-md p-3 ${item.color}`}>
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {item.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              </dd>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            <div className="mt-6 flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                <li className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        New user registered
                      </p>
                      <p className="text-sm text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                </li>
                {/* Add more activity items here */}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">System Status</h3>
            <div className="mt-6">
              <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    System Load
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    23%
                  </dd>
                </div>
                <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Uptime
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    99.9%
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;