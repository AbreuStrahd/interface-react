import React from "react";
import './Article.css'
import thrash from './thrash.png'

const ComponentArticle = ({article}) => (
    <div>
        <section className="header">
        <h1 className="title">Artigos-admin</h1>  
        <button className="criar">Criar</button>
        <input className="search" type="search" />
        </section>
        
        <div className="article-box">
        <img className="thrash" src={thrash}></img>
            <nobr>
            <h1 className="article-box__title">{article.title}</h1></nobr>
            <span className="article-box__url"><a href="{article.url}">{article.url}</a></span>
        <button className="editar">Editar</button></div>
        
        <div className="article-box">
        <img className="thrash" src={thrash}></img>
            <nobr>
            <h1 className="article-box__title">{article.title}</h1></nobr>
            <span className="article-box__url"><a href="{article.url}">{article.url}</a></span>
        <button className="editar">Editar</button></div>
        <div className="article-box">
        <img className="thrash" src={thrash}></img>
            <nobr>
            <h1 className="article-box__title">{article.title}</h1></nobr>
            <span className="article-box__url"><a href="{article.url}">{article.url}</a></span>
        <button className="editar">Editar</button></div>
    </div>
)

export default ComponentArticle;