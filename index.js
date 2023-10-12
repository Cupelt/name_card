const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        const child = entry.target.children

        for(i = 0; i < child.length; i++) {
            if(entry.isIntersecting && child[i].className.split(" ").indexOf("scroll_animation") > -1) {
                child[i].classList.add('trigger_animation');

                for(j = 0; j < child[i].children.length; j++) {
                    if (child[i].children[j].className.split(" ").indexOf("scroll_animation") > -1)
                        child[i].children[j].classList.add('trigger_animation');
                }
            } else {
                child[i].classList.remove('trigger_animation');
                
                for(j = 0; j < child[i].children.length; j++) {
                    if (child[i].children[j].className.split(" ").indexOf("scroll_animation") > -1)
                        child[i].children[j].classList.remove('trigger_animation');
                }
            }
        }
    });
});

document.querySelectorAll('.chapter').forEach((element) => io.observe(element));