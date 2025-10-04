import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import DebtTable from './components/DebtTable';
import Charts from './components/Charts';
import api from './api';

export default function App() {
  const [customers, setCustomers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Tüm müşterileri fetch eden fonksiyon
  async function fetchCustomers(q = '') {
    try {
      const res = await api.get(`/customers${q ? `?q=${q}` : ''}`);
      setCustomers(res.data);
    } catch (err) {
      console.error("Müşteri verisi alınamadı:", err);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        <aside className="col-span-4">
          <Sidebar customers={customers} onSelect={setSelected} onRefresh={fetchCustomers} />
        </aside>
        <main className="col-span-8">
          <div className="mb-4">
            <Charts customer={selected} />
          </div>
          <DebtTable customer={selected} onSaved={() => fetchCustomers()} />
        </main>
      </div>
    </div>
  );
}
