
import {useState} from 'react'

export default function App(){

 const [produtos,setProdutos]=useState([
  {nome:'Arroz',qtd:2,preco:15},
  {nome:'Feijão',qtd:1,preco:8},
  {nome:'Óleo',qtd:3,preco:5}
 ])

 const total=produtos.reduce((s,p)=>s+(p.qtd*p.preco),0)
 const desconto=total>100?total*0.1:0

 return (
 <div style={{fontFamily:'Arial',padding:30}}>
  <h1>Avaliação Técnica - Compras</h1>

  {produtos.map((p,i)=>(
   <div key={i}>
    <input value={p.nome}
    onChange={e=>{
     let x=[...produtos]; x[i].nome=e.target.value; setProdutos(x)
    }}/>

    <input type="number" value={p.qtd}
    onChange={e=>{
     let x=[...produtos]; x[i].qtd=Number(e.target.value); setProdutos(x)
    }}/>

    <input type="number" value={p.preco}
    onChange={e=>{
     let x=[...produtos]; x[i].preco=Number(e.target.value); setProdutos(x)
    }}/>
   </div>
  ))}

  <button onClick={()=>setProdutos([...produtos,{nome:'Novo',qtd:1,preco:0}])}>
   Adicionar
  </button>

  <h2>Total: R$ {(total-desconto).toFixed(2)}</h2>

  <h2>SQL</h2>

  <pre>
{`SELECT c.ID_Compra,
p.Nome_Produto,
c.Quantidade,
p.Preco_Unitario,
(c.Quantidade*p.Preco_Unitario) Valor_Total
FROM Compras c
JOIN Produtos p ON c.ID_Produto=p.ID_Produto;`}
  </pre>

 </div>
 )
}
