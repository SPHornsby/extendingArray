module.exports = function() {
  if(!Array.prototype.ascending) {
    Array.prototype.ascending = function(callbackfn, thisArg) {
      if(this == null) {
        throw new TypeError('this is null or not defined');
      }
      var O = Object(this);
      return O.every((e,i,a) => {
        var next = a[i+1] || Number.POSITIVE_INFINITY;
        return e <= next;
      })
      
    }
  }

  if(!Array.prototype.strictAscending) {
    Array.prototype.strictAscending = function(callbackfn, thisArg) {
      if(this == null) {
        throw new TypeError('this is null or not defined');
      }
      var O = Object(this);
      return O.every((e,i,a) => {
        var next = a[i+1] || Number.POSITIVE_INFINITY;
        return e < next;
      })
      
    }
  }

  if(!Array.prototype.descending) {
    Array.prototype.descending = function(callbackfn, thisArg) {
      if(this == null) {
        throw new TypeError('this is null or not defined');
      }
      var O = Object(this);
      return O.every((e,i,a) => {
        var next = a[i+1] || Number.NEGATIVE_INFINITY;
        return e >= next;
      })
      
    }
  }

  if(!Array.prototype.strictDescending) {
    Array.prototype.strictDescending = function(callbackfn, thisArg) {
      if(this == null) {
        throw new TypeError('this is null or not defined');
      }
      var O = Object(this);
      return O.every((e,i,a) => {
        var next = a[i+1] || Number.NEGATIVE_INFINITY;
        return e > next;
      })
      
    }
  }
}