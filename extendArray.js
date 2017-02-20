module.exports = function() {
  if(!Array.prototype.isAscending) {
    Array.prototype.isAscending = function(callbackfn, thisArg) {
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

  if(!Array.prototype.isStrictAscending) {
    Array.prototype.isStrictAscending = function(callbackfn, thisArg) {
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

  if(!Array.prototype.isDescending) {
    Array.prototype.isDescending = function(callbackfn, thisArg) {
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

  if(!Array.prototype.isStrictDescending) {
    Array.prototype.isStrictDescending = function(callbackfn, thisArg) {
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