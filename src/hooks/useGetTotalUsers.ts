import { useState, useEffect } from 'react';

export function useGetTotalUsers() {
  const [totalUsers, setTotalUsers] = useState<number>(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await fetch('/api/total-users');
        const data = await response.json();
        setTotalUsers(data.totalUsers);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    fetchTotalUsers();
    const interval = setInterval(fetchTotalUsers, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return totalUsers;
}