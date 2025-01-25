import { useState, useEffect } from 'react';
import { getUsers } from "@/data/getUsers";

export function useGetTotalUsers() {
  const [totalUsers, setTotalUsers] = useState<number>(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await getUsers();
        setTotalUsers(response);
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