// lorem text
const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
    `second ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
    `third ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
    `fourth ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
    `fifth ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
    `sixth ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
    `seventh ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
    `eigth ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
    `nineth ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint provident delectus dolores beatae labore facere, animi velit obcaecati, repudiandae dolorum unde! Repudiandae possimus ipsam dolore id explicabo placeat error accusamus ducimus, veniam nisi molestiae veritatis. Aliquid veritatis fugit molestias? Quibusdam aut soluta maxime tempora cum ut cumque, ullam totam.`,
];

const form = document.querySelector(".lorem-form");
const amount = document.querySelector("#amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    //empty 
    // -1 
    // > 9 
    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
       tempText=tempText
       .map(function(item){
        return `<p class="result">${item}</p>`;
       })
       .join("");
       result.innerHTML=tempText;
    }
});
