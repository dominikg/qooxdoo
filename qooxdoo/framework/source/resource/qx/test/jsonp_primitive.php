<?php
  if (isset($_GET['sleep'])) {
    usleep($_GET['sleep'] * 1000);
  }
  $callback = strip_tags($_GET['callback']);
  $callback = str_replace(array("(", ")"), "", $callback);
  echo $callback . '({"string": "String", "number": 12, "boolean": true, "null": null});'
?>