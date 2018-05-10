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

}