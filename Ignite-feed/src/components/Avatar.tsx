import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean; //?Deixa opcional
}

export function Avatar({hasBorder = true, ...props}: AvatarProps){
    //const hasBorder = props.hasBorder !== false; //Uma maneira de tirar a Borda
 return(
    <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...props}
    /> 
 );
}