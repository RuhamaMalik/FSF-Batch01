// prompt(question, defaultAns(optional))

let parent = document.getElementById('parent');
let image = document.getElementById('bg-img');
let season = prompt(`Which season ou like most?
  Select:
  summer
  winter
  `)?.toLowerCase();

// console.log(season.toLowerCase());
// console.log(season.toUpperCase());

if (season === 'summer') {
  // image.src = 'https://i.pinimg.com/originals/aa/62/ee/aa62ee27afb2a97fa4c1f938dd57f78f.gif';

parent.innerHTML = `

 <img id="bg-img" src="https://i.pinimg.com/originals/aa/62/ee/aa62ee27afb2a97fa4c1f938dd57f78f.gif" alt="bg image">

 <div class="product-card">
      <div class="badge">Hot</div>
      <div class="product-tumb">
        <img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyazBsOWhyNHo3djA5eG81b3d2eHVqaDZwZWthcmlrcWpoYWY4MTh4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UUjinOmq8tuwSe7URz/giphy.gif"
          alt="winter">
      </div>
      <div class="product-details">
        <span class="product-catagory">Summer Season</span>
        <h4><a href="">Summer - lorem fjkdf dfd</a></h4>
        <p>Experience ultimate comfort and reactive cushioning with the sleekest design on the track.</p>
        <div class="product-bottom-details">
          <div class="product-price">$150.00 <small>$190.00</small></div>
          <div class="product-links">
            <button class="buy-btn">View Summer</button>
          </div>
        </div>
      </div>
    </div>

`


}else if (season === 'winter') {

parent.innerHTML = `

 <img id="bg-img" src="https://i.pinimg.com/originals/52/31/63/52316300128938942bac41c6501c17e5.gif" alt="bg image">

 <div class="product-card">
      <div class="badge">Cold</div>
      <div class="product-tumb">
        <img src="https://cdn.pixabay.com/animation/2025/09/11/15/17/15-17-15-886_512.gif"
          alt="winter">
      </div>
      <div class="product-details">
        <span class="product-catagory">Winter Season</span>
        <h4><a href="">Winter - lorem fjkdf dfd</a></h4>
        <p>Experience ultimate comfort and reactive cushioning with the sleekest design on the track.</p>
        <div class="product-bottom-details">
          <div class="product-price">$150.00 <small>$190.00</small></div>
          <div class="product-links">
            <button class="buy-btn">View Winter</button>
          </div>
        </div>
      </div>
    </div>

`


}else{
  parent.innerHTML = `

 <img id="bg-img" src="https://i.pinimg.com/originals/f7/d0/02/f7d0021c7065e21a5f437f86686a6241.gif" alt="bg image">

 <div class="product-card">
      <div class="badge">OOPs</div>
      <div class="product-tumb">
        <img src="https://almureed.ae/assets/website/images/404.gif">
      
    </div>

`

}


