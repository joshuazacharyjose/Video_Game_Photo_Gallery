$(document).ready(function() {
  // Handle navigation clicks
  $('.nav-btn').on('click', function() {
    const section = $(this).data('section');
    const $currentSection = $('.gallery-section.active');
    const $nextSection = $(`#${section}-section`);
    const $currentHero = $('.hero-img.active');
    const $nextHero = $(`.hero-img[data-section="${section}"]`);

    if (!$nextSection.hasClass('active')) {
      // Fade out current
      $currentSection.removeClass('active').css('opacity', 0);
      $currentHero.removeClass('active').fadeOut(500);
      $('.nav-btn').removeClass('active');
      $(this).addClass('active');

      setTimeout(() => {
        $('.gallery-section').not($nextSection).hide();
        $nextSection.addClass('active').show().css('opacity', 1);
        $nextHero.addClass('active').fadeIn(500);
      }, 500);
    }
  });

  // Show Minecraft section by default
  $('#minecraft-section').addClass('active').show().css('opacity', 1);
  $('.hero-img[data-section="minecraft"]').addClass('active').show();
  $('.nav-btn[data-section="minecraft"]').addClass('active');

  // Handle modal image update
  $('.stacked-img').on('click', function () {
    let imgSrc = $(this).attr('src');
    if (!imgSrc) {
      imgSrc = $(this).attr('src');
    }
    $('#modalImage').attr('src', imgSrc);

    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  });

  // Reset modal on close to prevent glitches
  $('#imageModal').on('hidden.bs.modal', function () {
    $('#modalImage').attr('src', '');
  });
});