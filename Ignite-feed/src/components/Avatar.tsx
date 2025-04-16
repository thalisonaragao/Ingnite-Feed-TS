import styles from './Avatar.module.css';

interface AvatarProps{
    hasBorder?: boolean; //?Deixa opcional
    src: string;
    alt?: string;
}

export function Avatar({hasBorder = true, src, alt}: AvatarProps){
    //const hasBorder = props.hasBorder !== false; //Uma maneira de tirar a Borda
 return(
    <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt= {alt}
    /> 
 );
}