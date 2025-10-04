        import React from 'react'
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell} from 'recharts'
export default function Charts(){
  const bar=[{month:'Jan',total:300},{month:'Feb',total:420},{month:'Mar',total:280}]
  const pie=[{name:'Alacak',value:400},{name:'Tahsil',value:200}]
  const COLORS=['#1fb954','#60a5fa']
  return (
    <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:12}}>
      <div style={{background:'#071028',padding:12,borderRadius:10}}>
        <h4 style={{color:'#9feac9'}}>Aylık Borç</h4>
        <div style={{height:200}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bar}><XAxis dataKey="month"/><YAxis/><Tooltip/><Bar dataKey="total" fill="#1fb954"/></BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{background:'#071028',padding:12,borderRadius:10}}>
        <h4 style={{color:'#9feac9'}}>Durum</h4>
        <div style={{height:200}}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart><Pie data={pie} dataKey="value" nameKey="name" outerRadius={70}>{pie.map((e,i)=>(<Cell key={i} fill={COLORS[i%COLORS.length]} />))}</Pie></PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
