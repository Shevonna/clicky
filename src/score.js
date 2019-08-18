import Clicked from './pics.js'

class Score extends Clicked {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };

        // This binding is necessary to make `this` work in the callback
        this.score = this.score.bind(this);

    }

score(){
    let point = 0;
    // const shuffle = require('shuffle-array');
    // let img =[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
    if(this.setState === true){
        alert("Already guessed!");
        point = 0;
                
    }
    else{
        point++;
        
    }
}
}
export default Score;