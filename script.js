let persons=['tanya','john'];
let buttons=document.querySelectorAll('.helper');
let pname=document.querySelector('.name');
let image=document.querySelector('.container .image>img');
let comment=document.querySelector('.comment');
let job=document.querySelector('.job');
let prev=buttons[0];
let next=buttons[1];
for(let i=0;i<buttons.length;i++){
  buttons[i].addEventListener('mouseover',() => {
    buttons[i].style.backgroundColor='#ebebeb';
  });
  buttons[i].addEventListener('mouseout',() => {
    buttons[i].style.backgroundColor='#fff';
  });
  buttons[i].addEventListener('click',() => {
    if(pname.dataset.name=='tanya'){
      image.setAttribute('src','./images/image-john.jpg');
      pname.innerHTML='John Tarkpor';
      comment.innerHTML='“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about '+
      'starting up as a professional developer. ”';
      job.innerHTML='Junior Front-end Developer';
      pname.dataset.name='john';
    }
    else if(pname.dataset.name=='john'){
      image.setAttribute('src','./images/image-tanya.jpg');
      pname.innerHTML='Tanya Sinclair';
      comment.innerHTML='“ I’ve been interested in coding for a while but never taken the jump,'+
      'until now. I couldn’t recommend this course enough. I’m now in the job'+
      'of my dreams and so excited about the future. ”';
      job.innerHTML='UX Engineer';
      pname.dataset.name='tanya';
    }
  });
}
