//这段代码实现了一个简单的表格搜索功能，
//用户在输入框中输入文本时，将会过滤表格中的行，只显示匹配搜索关键词的行。
// 定义一个搜索函数
function search() {
  // 获取输入框元素
  let input = document.getElementById("myInput");
  // 获取输入框的值并转换为大写以进行不区分大小写的搜索
  let filter = input.value.toUpperCase();
  // 获取包含表格的元素
  let table = document.getElementById("myTable");
  // 获取表格中所有的行
  let tr = table.querySelectorAll("tr");
  // 遍历表格中的每一行
  for (let i = 0; i < tr.length; i++) {
    // 获取当前行的第一个单元格
    let td = tr[i].querySelectorAll("td")[0];
    // 检查单元格是否存在
    if (td) {
      // 检查单元格中的文本是否包含搜索关键词
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        // 如果包含，显示该行
        tr[i].style.display = "";
      } else {
        // 如果不包含，隐藏该行
        tr[i].style.display = "none";
      }
    }
  }
}

// 获取输入框元素
let input = document.getElementById("myInput");

// 添加输入事件监听器，当输入框的内容发生变化时执行搜索函数
input.addEventListener("input", search);

//这段代码实现了一个用于表格排序的函数，
//它可以根据用户点击表头来对表格的特定列进行升序或降序排序。

// 定义用于表格排序的函数，参数 n 代表列号
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  // 获取包含表格的元素
  table = document.getElementById("myTable");
  // 开始排序过程
  switching = true;

  // 默认排序方向为升序
  dir = "asc";
  while (switching) {
    switching = false;
    // 获取表格的所有行
    rows = table.rows;
    // 遍历表格的行，从第二行开始（第一行通常是表头）
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      // 获取当前行和下一行的要比较的单元格
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      // 根据排序方向和单元格内容比较决定是否交换行
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    // 如果需要交换行，则进行交换并标记为已交换
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      // 如果没有发生交换并且排序方向为升序，切换为降序重新进行排序
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
