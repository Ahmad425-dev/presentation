import React from 'react'
import "./skills.css"


const Skills = ()=> {
  return (
    <section className="skills">
<span className="skilltitle">What i Do </span>
<span className="skillsdesc">I am a skill and passionate web designer with experience in Creating appealing user friendly website. </span>
<div className="skillbars">
    <div className="skilltxt1">
        <h2>UI /UX DESIGN</h2>
        <p>This is a demo text, you can write here</p>
    </div>
    <div className="skilltxt1">
        <h2>Website Design</h2>
        <p>this demo text can be changed while aking the production ready to site</p>
    </div>
    <div className="skilltxt1">
        <h2>App Design</h2>
        <p>you can write text related to mobile app development</p>
    </div>
</div>


    </section>
  )
}

export default Skills;
