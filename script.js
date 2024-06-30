function addComment() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    if (name && comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        const newComment = { name, comment, date: new Date().toLocaleString() };
        comments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));
        displayComments();
        document.getElementById('comment-form').reset();
    } else {
        alert('Vyplňte prosím všechna pole.');
    }
}

function displayComments() {
    const commentsSection = document.getElementById('comments-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    commentsSection.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <p><strong>${comment.name}</strong> (${comment.date})</p>
            <p>${comment.comment}</p>
        `;
        commentsSection.appendChild(commentElement);
    });
}

document.addEventListener('DOMContentLoaded', displayComments);
