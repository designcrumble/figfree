$(document).ready(function () {
//Client Side Filtering for Case Studies

    console.log('filters running');

    document.addEventListener('click', function (e) {
        var button = e.target;
        buttons = document.querySelectorAll('button');
          for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
          }
        button.classList.add("active");
      if (button.getAttribute('data-reset') === 'true') {
        // Reset the filters
        var filter = button.getAttribute('data-filter');
        resetFilter(filter);
      } else {
        // Filter the tag
        var filter = button.getAttribute('data-filter');
        var tag    = button.getAttribute('data-filter-tag');

        filterTag(filter, tag);
      }
    });

    // Filter tag
    function filterTag (filter, tag) {
      var items = document.querySelectorAll('.' + filter + ' > li');
      for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('data-toggle', 'on');
      }
      for (var i = 0; i < items.length; i++) {
        var itemTags = items[i].getAttribute('data-tags');
        // Catch case with no tags
        if (itemTags != null) {
          if (itemTags.indexOf(tag) < 0) {
            items[i].setAttribute('data-toggle', 'off');
          }
        }
      }
    }

    // Reset filters (All)
    function resetFilter (filter) {
      var items = document.querySelectorAll('.' + filter + ' > li');

      for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('data-toggle', 'on');
      }
    }
});
