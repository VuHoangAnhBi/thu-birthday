const moreIcon = document.querySelector('img.more-icon')
const childrenMoreIcons = document.querySelector('.more-options .children');
const wishButton = document.querySelector('.children .wish')
const loveWishButton = document.querySelector('.children .love')

// modals
const typeModal = {
    wish: 'wish',
    love: 'love'
}

const setTypeModal = (name) => {
    document.querySelector(`.modals .${name}`).style.display = 'inline-block';
    Object.keys(typeModal).filter(key => typeModal[key] !== name).forEach(item => document.querySelector(`.modals .${item}`).style.display = 'none');
}

const modals = document.querySelector('.modals');
const childrenModals = modals.childNo
const buttonRead = document.querySelector('button.read');

const showClassMore = 'show-icon';

if (moreIcon) {
    moreIcon.onclick = () => {
        if (childrenMoreIcons.classList.contains(showClassMore)) {
            childrenMoreIcons.classList.remove(showClassMore);
        } else {
            childrenMoreIcons.classList.add(showClassMore);
        }
    }
}

if (wishButton) {
    wishButton.onclick = () => {
        setTypeModal('wish')
        modals.style.display = 'flex';
    }
}

if (loveWishButton) {
    loveWishButton.onclick = () => {
        setTypeModal('love')
        modals.style.display = 'flex';
    }
}

if (buttonRead) {
    buttonRead.onclick = () => {
        modals.style.display = 'none';
    }
}
