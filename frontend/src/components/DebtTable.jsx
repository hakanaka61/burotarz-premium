    import React from 'react'
export default function DebtTable(){
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-4 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-green-300 font-semibold">Borç Tablosu</h3>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-green-500 rounded-md">Temizle</button>
          <button className="px-3 py-2 bg-green-500 text-black rounded-md">Kaydet</button>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="min-w-full table-auto text-sm">
          <thead><tr className="text-left"><th className="px-3 py-2">#</th><th>Tarih</th><th>Malın Cinsi</th><th>Miktar</th><th>Fiyat</th><th>Toplam</th><th>Alacak</th></tr></thead>
          <tbody>
            {[...Array(12).keys()].map(i=> (
              <tr key={i} className="odd:bg-gray-900 even:bg-gray-800">
                <td className="px-3 py-2">{i+1}</td>
                <td className="px-3 py-2">01.01.2025</td>
                <td className="px-3 py-2">Ürün {i+1}</td>
                <td className="px-3 py-2">1</td>
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">50</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
