document.querySelectorAll('.input-phone').forEach(function(el) {
  new Cleave(el, {phone: true, phoneRegionCode: 'ru'});
});