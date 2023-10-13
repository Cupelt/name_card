const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            addAnimation(entry.target, 0)
        } else {
            removeAnimation(entry.target)
        }
    });
});

function addAnimation(object, ani_counter) {
    if (object.className.split(" ").indexOf("scroll_animation") > -1) {
        object.style.cssText += " --delay: " + (ani_counter * 50) + "ms;"
        object.classList.add('trigger_animation');
    }

    if (object.children.length > 0) {
        for(let i = 0; i < object.children.length; i++) {
            ani_counter += 3;
            addAnimation(object.children[i], ani_counter)
        }
    }
}

function removeAnimation(object) {
    if (object.className.split(" ").indexOf("scroll_animation") > -1) {
        object.classList.remove('trigger_animation');
    }
    
    if (object.children.length > 0) {
        for(let i = 0; i < object.children.length; i++) {
            removeAnimation(object.children[i])
        }
    }
}

document.querySelectorAll('.chapter').forEach((element) => io.observe(element));