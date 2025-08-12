import { FiHome, FiServer, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

export const RouteSelect = () => {
    return (
        <div className="space-y-1 flex flex-col items-start text-gray-100 mt-5">
            <Route Icon={FiHome} title="Dashboard" to="/dashboard" />
            <Route Icon={FiUser} title="Users" to="/users" />
            <Route Icon={FiUser} title="Admins" to="/admins" />
            <Route Icon={FiServer} title="Server" to="/server" />
        </div>
    );
};

const Route = ({ to, Icon, title }: { to: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; title: string }) => {
    const location = useLocation();
    const selected = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center justify-center lg:justify-start gap-2 w-full rounded px-2 py-2.5 text-sm transition-all duration-200 ${selected
                    ? 'bg-purple-700 dark:bg-white text-gray-100 dark:text-black shadow-md'
                    : 'bg-transparent text-gray-300 dark:hover:bg-gray-200 hover:bg-purple-600 dark:hover:text-black'
                }`}
        >
            <Icon className="w-5 h-5" />
            <span className="hidden lg:inline">{title}</span>
        </Link>
    );
};