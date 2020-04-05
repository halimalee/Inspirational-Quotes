import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quotes-more',
  templateUrl: './quotes-more.component.html',
  styleUrls: ['./quotes-more.component.css']
})
export class QuotesMoreComponent implements OnInit {

  quotes: Quotes [] = [
    new Quotes(1,'Wonder is the beginning of wisdom.Know then experience what you know','Sir Platos Theaetetus','Beryl Negesa','In order to be a philosopher, one must be curious about the world. One has to wonder how the world works and why; and, if it could somehow be improved.It is just not enough to be content with what we know currently or sit on the information we know without learning to practice the knowledge we acquire.People must learn to learn.',new Date(2018, 25, 3)),
    new Quotes(2,'I have had many friends but My greatest friend is truth.','Sir Isaac Newton','Beryl Negesa','Newton (I assume the attribution is correct) was merely paraphrasing a well-known Latin phrase traditionally ascribed to Plato (though not found in any of Platos authentic works). Roger Bacon quoted it as: Nam Plato dicit: and Bacons contemporary Thomas Aquinas cites it in a similar form.',new Date(2017, 28, 1)),
    new Quotes(3,'I am a slow walker but I never walk backwards.','Sir Abraham Lincoln','Beryl Negesa','It took him a while to come to a decision; but when he finally did he would not change it. An example would be when he issued the Emancipation Proclamation; he took a long time deciding weather to issue it or not. However after he did many times he was told that repealing it would help bring the South to the negotiation table; but Lincoln refused to retract anything.',new Date(2017, 15, 10)),
    ];
   
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.mediumDate = new Date(quote.mediumDate);
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  numberoflikes=0
  highestCounter=0;
  bestQuote:string;

  showMeMostLiked(){
    this.highestCounter=0;
    for(let i=0 ;i < this.quotes.length;i++){
      this.highestCounter = this.quotes[this.highestCounter].numberoflikes;
      if(this.quotes[i].highestCounter >this.quotes[i].numberoflikes){
        this.highestCounter=this.quotes[i].numberoflikes;  
      }
      return  this.bestQuote=this.quotes[i].author;
    }
  }
  

   deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete quote by ${this.quotes[index].author}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  completeGoal(isComplete, index){
    if(isComplete){
      // alert("You cannot delete a quote that you haven't posted")
      this.quotes.splice(index,1);
   }
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
