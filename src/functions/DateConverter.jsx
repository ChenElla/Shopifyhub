function dateConverter(timestamp){
    const today = new Date(timestamp);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    const diff = new Date().getTime() - today.getTime();
    let milliSec = diff;

    const years = Math.floor(milliSec / 1000 / 60 / 60 / 24 / 365 );
    milliSec -= years * 1000 * 60 * 60 *24 * 365;
    
    const months = Math.floor(milliSec / 1000 / 60 / 60 / 24 / 30);
    milliSec -= months * 1000 * 60 * 60 *24 * 30;
    
    const days = Math.floor(milliSec / 1000 / 60 / 60 / 24 );
    milliSec -= days * 1000 * 60 * 60 * 24;
    
    const hours = Math.floor(milliSec / 1000 / 60 / 60 );
    milliSec -= hours * 1000 * 60 * 60 ;
    
    const mins = Math.floor(milliSec / 1000 / 60);
    milliSec -= mins * 1000 * 60;
    
    const secs = Math.floor(milliSec / 1000 );
    milliSec -= secs * 1000;
    if(months === 0 ){
        if(days === 0 ){
            if(hours === 0){
                if (mins === 0)
                    return secs + " seconds ago";
                return mins + " minutes ago";
            }
            return hours + " hours ago";
        }
        if(days < 2 )
            return "posted yesterday";
        return days + " days ago";
    }
    return mm + "/" + dd+ "/"+yyyy;
}
export {dateConverter};