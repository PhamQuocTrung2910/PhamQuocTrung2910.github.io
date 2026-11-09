(function(){
  var r=document.documentElement,t=document.getElementById('theme');
  function dark(){return r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches}
  t.addEventListener('click',function(){r.dataset.theme=dark()?'light':'dark'});

  var bar=document.getElementById('bar');
  function prog(){var h=r.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')'}
  addEventListener('scroll',prog,{passive:true});addEventListener('resize',prog);prog();

  var m=document.getElementById('mail'),s=document.getElementById('status'),addr='phamben2910@gmail.com';
  m.addEventListener('click',function(e){
    e.preventDefault();
    function fallback(){location.href='mailto:'+addr}
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(addr).then(function(){s.textContent='Copied. Now go write me something.'},fallback);
    }else{fallback()}
  });
})();
