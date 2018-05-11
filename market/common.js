window.onload = function() {

    let focus = document.getElementsByClassName('lnk-doubanapp');
    let disp = document.getElementsByClassName('more-items');
    let maru = document.getElementsByClassName('market-user');
    let navl = this.document.getElementsByClassName('nav-list');

    focus[0].onmouseover = function() {
        disp[0].style.display = "block";
        document.getElementsByClassName("top-nav-doubanapp")[0].classList.add("more-active");
        disp[0].onmouseover = function() {
            this.style.display = 'block';
        }
        disp[0].onmouseout = function() {
            this.style.display = 'none';
        }
    }
    focus[0].onmouseout = function() {
        disp[0].style.display = "none";
    }
    maru[0].onmouseover = function() {
        navl[0].style.display = "block";
        navl[0].onmouseover = function() {
            this.style.display = 'block';
        }
        navl[0].onmouseout = function() {
            this.style.display = 'none';
        }
    }
    maru[0].onmouseout = function() {
        navl[0].style.display = "none";
    }
    let sliderInner = this.document.getElementsByClassName('slide-inner');
    let counter = 0;

    let spitem = document.getElementsByClassName('slide-paginator-item');
    spitem[0].style.color = 'red';

    setInterval(() => {
        console.log(sliderInner[0].style.left + " " + counter);
        spitem[counter].style.color = 'red';
        sliderInner[0].style.left = counter++ > 5 ? sliderInner[0].style.left = counter = 0 : parseInt(sliderInner[0].style.left) - 1903 + 'px';
        // let spitem = document.getElementsByClassName('slide-paginator-item');
        // counter++;

    }, 2000);

}