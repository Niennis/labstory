const allNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twentyone', 'twentytwo', 'twentythree', 'twentyfour'];

const allDays = document.querySelectorAll('.day');
allDays.forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('days').style.display = "none"
    console.log(item.classList[0])
    if (allNumbers.includes(item.classList[0])) {
      console.log(item.classList[0] + 'Expanded')
      document.getElementById(item.classList[0] + 'Expanded').style.display = "flex";
    }
  })
})

const allHidden = document.querySelectorAll('.hidden')
allHidden.forEach(item => {
  item.addEventListener('click', () => {
    item.style.display = "none"
    document.getElementById('days').style.display = "grid"
  })
})
