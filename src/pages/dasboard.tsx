import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { SimpleGrid } from '@mantine/core';
import { DashboardCard } from '../components/dashboardCard';
import { IconSettings } from '@tabler/icons-react';

export function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    console.log(user);

    if (!user) {
        navigate('/login');
    }

    const CARDS = [
        {
            icon: <IconSettings />,
            title: 'Einstellungen',
            link: '/settings',
            description: 'Hier kannst du deine Einstellungen ändern'
        }
    ];

    return (
        <div className="flex flex-col">
            <div className="bg-white shadow-md rounded md:px-8 px-4 pt-6 pb-8 md:m-4 m-1">
                <h2 className="text-2xl font-bold">Dashboard</h2>

                <SimpleGrid
                    cols={4}
                    className="mt-5"
                    breakpoints={[
                        { maxWidth: 'md', cols: 2 },
                        { maxWidth: 'xs', cols: 1 }
                    ]}
                >
                    {CARDS.map((card) => (
                        <DashboardCard {...card} />
                    ))}
                </SimpleGrid>
            </div>
        </div>
    );
}
