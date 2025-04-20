import Card from './Card';
import {card_detail} from './Data';

export default function Banner(){
    return(
        <div id="Banner-conatiner">
        {card_detail.map((card_info)=><Card {...card_info}/>)}
        </div>
    )
}