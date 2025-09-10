function handleSubmit(e){
    e.preventDefault();
    const q = document.getElementById('searchInput').value.trim();
    if(!q) return false;
    // folosește căutare Google reală
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
    window.location.href = url;
    return false;
    }
    
    
    document.getElementById('imFeeling').addEventListener('click', ()=>{
    // trimite către Google Doodles sau spre o pagina aleatorie; aici redirecționăm la Doodles
    window.location.href = 'https://www.google.com/doodles';
    });
    
    
    // tastă Enter în input — formularul are onsubmit, dar adăugăm și fallback
    document.getElementById('searchInput').addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
    handleSubmit(e);
    }
    });