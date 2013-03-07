var forEach = require('each');

module.exports = function(str_m, str_n) {
  var current, inspect, matrix, previous;
  this.valueOf = function() {
    return this.distance;
  };
  this.toString = this.inspect = inspect = function(no_print) {
    var buff, max, rows, sep;
    max = matrix.reduce(function(m, o) {
      return Math.max(m, o.reduce(Math.max, 0));
    }, 0);
    buff = Array((max + '').length).join(' ');
    sep = [];
    while (sep.length < (matrix[0] && matrix[0].length || 0)) {
      sep[sep.length] = Array(buff.length + 1).join('-');
    }
    sep = sep.join('-+') + '-';
    rows = matrix.map(function(row) {
      var cells;
      cells = row.map(function(cell) {
        return (buff + cell).slice(-buff.length);
      });
      return cells.join(' |') + ' ';
    });
    return rows.join('\n' + sep + '\n');
  };
  matrix = [];
  if (str_m === str_n) {
    return this.distance = 0;
  } else if (str_m === '') {
    return this.distance = str_n.length;
  } else if (str_n !== '') {
    previous = [0];
    forEach(str_m, function(v, i) {
      i++;
      return previous[i] = i;
    });
    matrix[0] = previous;
    forEach(str_n, function(n_val, n_idx) {
      current = [++n_idx];
      forEach(str_m, function(m_val, m_idx) {
        m_idx++;
        if (str_m.charAt(m_idx - 1) === str_n.charAt(n_idx - 1)) {
          return current[m_idx] = previous[m_idx - 1];
        } else {
          return current[m_idx] = Math.min(previous[m_idx] + 1, current[m_idx - 1] + 1, previous[m_idx - 1] + 1);
        }
      });
      previous = current;
      return matrix[matrix.length] = previous;
    });
    return this.distance = current[current.length - 1];
  }
};