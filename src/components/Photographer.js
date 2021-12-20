import React, {useState, useEffect} from 'react'
import styles from './photographer.module.css'
import volder from '../assets/img/voldercompany.jpg'
import niels from '../assets/img/fotograaf.jpg'
import {motion} from 'framer-motion'

const Photographer = () => {

    const [visualizer, setVizualizer] = useState('video')
    const [image, setImage] = useState(volder)
    const [title, setTitle] = useState('Volder Company')
    const [description, setDescription] = useState('Wat begon met stilstaande beelden is uitgemunt tot een creative agency die zowel foto’s en video’s aanbied als websites en social media content. Ik kan mij ook niet voorstellen dat iemand anders deze avond zou filmen dan mijzelf. Ik roep jullie ook op om af en toe mijn camera vast te pakken en filmpjes maakt. Zo kan ik zelf ook van mijn avond genieten. Daar komen ook vaak grappige beelden uit ;).')
    const [url, setUrl] = useState('https://www.voldercompany.be/')
    const [business, setBusiness] = useState('volder')

    useEffect(() => {
        document.querySelector(`body`).style.overflowY = "auto"
    }, [])

    const changeContentPhoto = () => {
        if(visualizer === 'video') {
            setVizualizer('photo'); 
            setImage(niels); 
            setTitle('Niels Cloetens')  
            setDescription('Niels en ik zijn samen gestart met fotografie. We hebben elkaar geholpen om volwaardige fotografen te worden. Uiteindelijk zijn we beide onze eigen richtingen opgegaan. Vanavond werkt Niels onder de naam van VOLDER net zoals ik al veel gewerkt hebt onder de naam van zijn fotografie brand Senz. Zowel Niels als ik zijn er ook om van de avond te genieten dus vraag om foto’s in het begin van het evenement. ') 
            setUrl('https://senzevent.mypixieset.com/')
            setBusiness('senz')
        } else {
            setVizualizer('video'); 
            setImage(volder); 
            setTitle('Volder Company') 
            setDescription('Wat begon met stilstaande beelden is uitgemunt tot een creative agency die zowel foto’s en video’s aanbied als websites en social media content. Ik kan mij ook niet voorstellen dat iemand anders deze avond zou filmen dan mijzelf. Ik roep jullie ook op om af en toe mijn camera vast te pakken en filmpjes maakt. Zo kan ik zelf ook van mijn avond genieten. Daar komen ook vaak grappige beelden uit ;).') 
            setUrl('https://www.voldercompany.be/')
            setBusiness('volder')
        }
        
    }

    return(
        <main className={styles.container}>
            <h2 className={styles.title}>FOTOGRAAF / VIDEOGRAAF</h2>
            <article className={styles.visualizer}>
                <div className={styles.switch, styles[visualizer]}>
                    <p className={styles.switchLeft} onClick={changeContentPhoto}>videograaf</p>
                    <p className={styles.switchMiddle}>|</p>
                    <p className={styles.switchRight} onClick={changeContentPhoto}>fotograaf</p>
                </div>
                <motion.h3 initial={{ opacity: 0, x:-300}} key={visualizer}
      animate={{ opacity: 1, x: 0 , default: { duration: 2 }}}
      exit={{ opacity: 1, x:-300 }} duration={300} className={styles.business}>{title}</motion.h3>
                <div className={styles.info}>
                    <motion.p initial={{ opacity: 0, x: 200}} key={description}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x:200 }} duration={1} className={styles.description}>{description}</motion.p>
                    <motion.img initial={{ opacity: 0, x:300}} key={visualizer}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x:300 }} duration={1} className={styles.img} src={image}></motion.img>
                    <motion.a initial={{ opacity: 0, y:300}} key={business}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y:300 }} duration={1}  className={styles.website} target="_blank" href={url}>
                        <p className={styles.websiteName}>{business}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56.756" height="57.537" viewBox="0 0 56.756 57.537"><g transform="translate(0.708 1)"><path d="M11733.266,401h55.049v56.537" transform="translate(-11733.266 -401)" fill="none" stroke="#fff" stroke-width="2"/><path d="M11793.768,401l-55.049,55.048" transform="translate(-11738.719 -401)" fill="none" stroke="#fff" stroke-width="2"/></g></svg>
                    </motion.a>
                </div>
            </article>
        </main>
    )
}

export default Photographer