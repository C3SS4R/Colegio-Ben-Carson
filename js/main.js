(function(){
  "use strict";
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Mobile menu ──
  window.toggleMenu = function(){
    var m = document.getElementById('mobileMenu'), h = document.getElementById('hamburger');
    var open = m.classList.toggle('open');
    h.classList.toggle('open', open);
    h.setAttribute('aria-expanded', open);
  };
  document.querySelectorAll('.mobile-menu a').forEach(function(a){
    a.addEventListener('click', function(){
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById('hamburger').classList.remove('open');
      document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
    });
  });

  // ── Mobile submenu accordion ──
  window.toggleSub = function(btn){
    var open = btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  };

  // ── Curso selector (sliding indicator + stagger) ──
  var csInd = document.getElementById('csInd');
  function moveInd(btn){
    if(!csInd || !btn) return;
    csInd.style.left = btn.offsetLeft + 'px';
    csInd.style.top = btn.offsetTop + 'px';
    csInd.style.width = btn.offsetWidth + 'px';
    csInd.style.height = btn.offsetHeight + 'px';
    csInd.style.opacity = '1';
  }
  function staggerIn(panel){
    var els = panel.querySelectorAll('.cs-anim');
    els.forEach(function(e){ e.classList.remove('in'); e.style.transitionDelay = '0ms'; });
    void panel.offsetWidth;
    els.forEach(function(e,i){ e.style.transitionDelay = (reduce ? 0 : i*55) + 'ms'; e.classList.add('in'); });
  }
  window.showCurso = function(id, btn){
    document.querySelectorAll('.cs-panel').forEach(function(p){ p.classList.remove('active'); });
    document.querySelectorAll('.cs-tab').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active'); moveInd(btn);
    var panel = document.getElementById('cs-'+id);
    panel.classList.add('active'); staggerIn(panel);
  };
  // position indicator + reveal first panel when section enters view (once)
  var activeTab = document.querySelector('.cs-tab.active');
  window.addEventListener('load', function(){ moveInd(activeTab); });
  var csSection = document.getElementById('cursos'), csDone = false;
  if(csSection){
    new IntersectionObserver(function(en,ob){ en.forEach(function(e){ if(e.isIntersecting){ moveInd(activeTab); if(!csDone){ csDone=true; staggerIn(document.querySelector('.cs-panel.active')); } } }); },{threshold:.15}).observe(csSection);
  }
  window.addEventListener('resize', function(){ moveInd(document.querySelector('.cs-tab.active')); });

  // ── Scroll reveal (stagger aware) ──
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-stagger]').forEach(function(c){
    var kids = c.querySelectorAll('[data-anim]');
    kids.forEach(function(k,i){ k.style.transitionDelay = (i*70)+'ms'; });
  });
  document.querySelectorAll('[data-anim]').forEach(function(el){ io.observe(el); });

  // ── Animated counters (per element, view-triggered, thousands-formatted) ──
  function fmtNum(n){ return n >= 1000 ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : n; }
  function animateCount(el){
    var target = +el.getAttribute('data-count'), start = null, dur = 1300;
    if(reduce){ el.textContent = fmtNum(target); return; }
    function step(ts){ if(!start) start = ts; var p = Math.min((ts-start)/dur,1);
      var eased = 1 - Math.pow(1-p,3);
      el.textContent = fmtNum(Math.floor(eased*target));
      if(p<1) requestAnimationFrame(step); else el.textContent = fmtNum(target); }
    requestAnimationFrame(step);
  }
  var countObs = new IntersectionObserver(function(en,ob){
    en.forEach(function(e){ if(e.isIntersecting){ animateCount(e.target); ob.unobserve(e.target); } });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(function(el){ countObs.observe(el); });

  // ── Nav scrolled state + progress + back-to-top ──
  var nav = document.getElementById('nav'), progress = document.getElementById('progress'), toTop = document.getElementById('toTop');
  function onScroll(){
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle('scrolled', y > 30);
    progress.style.width = (h>0 ? (y/h*100) : 0) + '%';
    toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // ── Scrollspy ──
  var navMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function(a){ navMap[a.getAttribute('href').slice(1)] = a; });
  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      var a = navMap[e.target.id];
      if(a && e.isIntersecting){ Object.values(navMap).forEach(function(x){ x.classList.remove('active'); }); a.classList.add('active'); }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['sobre','galeria','cursos','atualidade','contactos'].forEach(function(id){ var s=document.getElementById(id); if(s) spy.observe(s); });

  // ── Parallax (rAF, respects reduced-motion) ──
  if(!reduce){
    var px = document.querySelectorAll('[data-parallax]'), ticking=false;
    function para(){
      var y = window.scrollY;
      px.forEach(function(el){ var s=+el.getAttribute('data-parallax'); el.style.transform='translateY('+(y*s)+'px)'; });
      ticking=false;
    }
    window.addEventListener('scroll', function(){ if(!ticking){ requestAnimationFrame(para); ticking=true; } }, {passive:true});
  }

  // ── Magnetic buttons ──
  if(!reduce && window.matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.magnetic').forEach(function(btn){
      btn.addEventListener('mousemove', function(e){
        var r = btn.getBoundingClientRect();
        var mx = e.clientX - r.left - r.width/2, my = e.clientY - r.top - r.height/2;
        btn.style.transform = 'translate('+(mx*0.25)+'px,'+(my*0.35)+'px)';
      });
      btn.addEventListener('mouseleave', function(){ btn.style.transform=''; });
    });
  }

  // ── Toast ──
  var toast = document.getElementById('toast'), toastMsg = document.getElementById('toastMsg'), toastTimer;
  function showToast(msg){ toastMsg.textContent = msg; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(function(){ toast.classList.remove('show'); }, 4500); }

  // ── Form: validate + build WhatsApp deep link ──
  var form = document.getElementById('contactForm');
  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    var ok = true;
    ['fNome','fTel','fAssunto','fMsg'].forEach(function(idf){
      var el = document.getElementById(idf), grp = el.closest('.form-group'), val = el.value.trim();
      var bad = !val || (idf==='fTel' && val.replace(/\D/g,'').length < 9);
      grp.classList.toggle('error', bad); if(bad && ok){ el.focus(); }
      if(bad) ok = false;
    });
    if(!ok){ showToast('Verifique os campos assinalados.'); return; }
    var nome = document.getElementById('fNome').value.trim() + ' ' + document.getElementById('fApelido').value.trim();
    var tel = document.getElementById('fTel').value.trim();
    var assunto = document.getElementById('fAssunto').value;
    var msg = document.getElementById('fMsg').value.trim();
    var text = 'Olá! Sou ' + nome.trim() + '.%0A' +
               'Assunto: ' + assunto + '%0A' +
               'Telefone: ' + tel + '%0A%0A' + encodeURIComponent(msg);
    window.open('https://wa.me/244939328544?text=' + text, '_blank', 'noopener');
    showToast('A abrir o WhatsApp com a sua mensagem…');
    form.reset();
    document.querySelectorAll('.form-group.error').forEach(function(g){ g.classList.remove('error'); });
  });
  // clear error on input
  form.querySelectorAll('input,select,textarea').forEach(function(el){
    el.addEventListener('input', function(){ el.closest('.form-group').classList.remove('error'); });
  });
})();
