    import React from 'react'
export default function Sidebar(){
  return (
    <aside className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-2xl shadow-lg">
      <h2 className="text-green-400 text-xl font-bold mb-2">Müşteri Listesi</h2>
      <input className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-sm placeholder-gray-400" placeholder="Müşteri Ara..." />
      <div className="mt-3 space-y-2 max-h-[60vh] overflow-auto">
        {[...Array(12).keys()].map(i=> (
          <div key={i} className="p-3 bg-gray-900 rounded-md flex items-center justify-between hover:shadow-md cursor-pointer">
            <div>
              <div className="text-sm font-semibold">Müşteri {i+1}</div>
              <div className="text-xs text-gray-400">0555 000 00{i}</div>
            </div>
            <div className="text-green-400 font-semibold">{i+1}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <button className="bg-transparent border border-green-500 text-green-200 px-3 py-2 rounded-md">+ Ekle</button>
        <button className="bg-green-500 text-black px-3 py-2 rounded-md">Kaydet</button>
      </div>
    </aside>
  )
}
