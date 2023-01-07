// Adding cover books
let coverBooks = [
  {
    imgCoverBook: "images/a-game-of-thrones.jpeg",
  },
  {
    imgCoverBook: "images/dear-john.jpeg",
  },
  {
    imgCoverBook: "images/harry-potter.jpeg",
  },
  {
    imgCoverBook: "images/marley-and-me.jpeg",
  },
  {
    imgCoverBook: "images/outwitting-the-devil.jpeg",
  },
  {
    imgCoverBook: "images/rich-dad-poor-dad.jpeg",
  },
  {
    imgCoverBook: "images/romeo-and-juliet.jpeg",
  },
  {
    imgCoverBook: "images/secrets-of-the-millionaire-mind.jpeg",
  },
  {
    imgCoverBook: "images/steve-jobs.jpeg",
  },
  {
    imgCoverBook: "images/the-lord-of-the-rings.jpeg",
  },
];

// Adding books
let books = [
  {
    isbnBook: "9780007448036",
    titleBook: "A Game of Thrones",
    authorBook: "George R R Martin",
    priceBook: 22.99,
    descriptionBook:
      "HBO's hit series A GAME OF THRONES is based on George R R Martin's internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A GAME OF THRONES is the first volume in the series.",
    genreBook: "Fantasy",
  },
  {
    isbnBook: "9780751541885",
    titleBook: "Dear John",
    authorBook: "Nicholas Sparks",
    priceBook: 19.99,
    descriptionBook:
      "When John meets Savannah, he realises he is ready to make some changes. Always the angry rebel at school, he has enlisted in the Army, not knowing what else to do with his life. Now he's ready to turn over a new leaf for the woman who has captured his heart.",
    genreBook: "General Fiction",
  },
  {
    isbnBook: "9781408855652",
    titleBook: "Harry Potter and the Philosopher's Stone",
    authorBook: "J. K. Rowling",
    priceBook: 16.99,
    descriptionBook:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
    genreBook: "Children's Fiction",
  },
  {
    isbnBook: "9780733620713",
    titleBook: "Marley and Me",
    authorBook: "John Grogan",
    priceBook: 19.99,
    descriptionBook:
      "The hilarious and unforgettable true story that delighted millions of readers worldwide and became a smash-hit film starring Owen Wilson and Jennifer Aniston.",
    genreBook: "Pets and Nature",
  },
  {
    isbnBook: "9781640951839",
    titleBook: "Outwitting The Devil",
    authorBook: "Napoleon Hill",
    priceBook: 34.99,
    descriptionBook:
      "Napoleon Hill's Outwitting the Devil The Secret to Freedom and Success Secrets from the Vault, Written in 1938, Revealed Today An Official Publication of The Napoleon Hill Foundation - Napoleon Hill was one of America's great, influential thinkers who continues to have an enormous impact today.",
    genreBook: "Careers",
  },
  {
    isbnBook: "9781612681139",
    titleBook: "Rich Dad Poor Dad",
    authorBook: "Robert T. Kiyosaki",
    priceBook: 14.99,
    descriptionBook:
      "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    genreBook: "Finance and Investing",
  },
  {
    isbnBook: "9780141396477",
    titleBook: "Romeo and Juliet",
    authorBook: "William Shakespeare",
    priceBook: 17.99,
    descriptionBook:
      "Romeo and Juliet is a hymn to youth and the thrill of forbidden love, charged with sexual passion and violence, but also a warning of death: a dazzling combination of bawdy comedy and high tragedy.",
    genreBook: "Plays",
  },
  {
    isbnBook: "9780060763282",
    titleBook: "Secrets Of The Millionaire Mind",
    authorBook: "T. Harv Eker",
    priceBook: 60.99,
    descriptionBook:
      "Have you ever wondered why some people seem to get rich easily, while others are destined for a life of financial struggle? Is the difference found in their education, intelligence, skills, timing, work habits, contacts, luck, or their choice of jobs, businesses, or investments?",
    genreBook: "Finance and Investing",
  },
  {
    isbnBook: "9781408703748",
    titleBook: "Steve Jobs",
    authorBook: "Walter Isaacson",
    priceBook: 59.99,
    descriptionBook:
      "From bestselling author Walter Isaacson comes the landmark biography of Apple co-founder Steve Jobs. In Steve Jobs: The Exclusive Biography, Isaacson provides an extraordinary account of Jobs' professional and personal life.",
    genreBook: "Biography",
  },
  {
    isbnBook: "9780007488315",
    titleBook: "The Lord Of The Rings",
    authorBook: "J R R Tolkien",
    priceBook: 16.99,
    descriptionBook:
      "Continuing the story begun in The Hobbit, this is the first part of Tolkien's epic masterpiece, The Lord of the Rings, featuring an exclusive cover image from the film, the definitive text, and a detailed map of Middle-earth.",
    genreBook: "Fantasy",
  },
];

// Load books to Home Page
function displayHome() {
  document.getElementById("allBooks").innerHTML = `
  <ol>
    ${refreshListBook()}
    </ol>
    `;
}

// Load all books and image cover
function refreshListBook() {
  var booksList = "";
  var container = "imgContainer";

  for (i = 0; i < books.length; i++) {
    var bookInformation = `
      ISBN: ${books[i].isbnBook}
      <br>
      Title: ${books[i].titleBook}
      <br>
      Author: ${books[i].authorBook}
      <br>
      Price: A$${books[i].priceBook}
      <br>
      Description: ${books[i].descriptionBook}
      <br>
      Genre: ${books[i].genreBook}
      <br><br>`;

    var id = i.toString();
    container += id;
    booksList += `
                  <div style="order: 0" class="book">
                        <div class="bookCoverImg">
                          <img src="${coverBooks[i].imgCoverBook}"/>
                        </div>
                    <div class="wrapperBookInfo">
                      <div class="bookInfo" id=${i}>
                      ${bookInformation}
                      <button type=button class ="submit-button" onclick='addToCart("${books[i].isbnBook}")'>Add to cart</button>
                      
                      </div>
                    </div>
                  </div>
                <br>`;
    container = "imgContainer";
  }
  return booksList;
}

function addToCart(isbnBook) {
  if (localStorage.getItem(isbnBook) > 0) {
    localStorage.setItem(
      isbnBook,
      parseInt(localStorage.getItem(isbnBook)) + 1
    );
  } else {
    localStorage.setItem(isbnBook, 1);
  }
}

function deleteFromCart(isbnBook) {
  if (localStorage.getItem(isbnBook)) {
    localStorage.removeItem(isbnBook);
    window.location.reload();
  }
}

function displayCart() {
  for (let i = 0; i < localStorage.length; i++) {
    var isbnOnCart = localStorage.key(i);
    var quantity = localStorage.getItem(isbnOnCart);
    for (let j = 0; j < books.length; j++) {
      if (isbnOnCart == books[j].isbnBook) {
        document.getElementById("allBooks").innerHTML +=
          '<div class="allBooks">' +
          "<br>" +
          '<div class="book">' +
          '<div class="bookCoverImg">' +
          '<img src="' +
          coverBooks[j].imgCoverBook +
          '">' +
          "</div>" +
          '<div class="wrapperBookInfo">' +
          '<div class="bookInfo">' +
          "<p><h2>Title: " +
          books[j].titleBook +
          "<p><h3>Quantity: " +
          quantity +
          '<div><button class="submit-button " onclick="deleteFromCart(' +
          books[j].isbnBook +
          ')">Remove book from Cart</button></div>';
      }
    }
  }
}

function confirmOrder() {
  if (localStorage.length < 1) {
    document.getElementById("confirmMessage").className = "orderError";
    document.getElementById("confirmMessage").innerHTML =
      "Your order cannot be processed as your shopping cart is empty. Please select at least one book";
  } else {
    document.getElementById("confirmMessage").className = "orderSuccess";
    document.getElementById("confirmMessage").innerHTML =
      "Thank you for your order. We have received it and will process your order soon";
    localStorage.clear();
  }
}

function clearAllBooks() {
  if (confirm("Do you want to remove all the books from the cart?")) {
    localStorage.clear();
    window.location.reload();
    alert("Your shopping cart is now empty");
  }
}
