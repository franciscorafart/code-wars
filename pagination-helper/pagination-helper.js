class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length;
	}
	pageCount() {
	// returns the number of pages
    if (this.itemsPerPage === 0) return 0;

    return Math.ceil(this.collection.length/this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range

    const startIndex = pageIndex * this.itemsPerPage
    
    if (this.collection.length === 0 || pageIndex < 0) return -1;
    if (startIndex >= this.collection.length) return -1;
    
    if (startIndex + this.itemsPerPage <= this.collection.length-1) {
      return this.itemsPerPage
    }
    
    return this.collection.length - startIndex
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if (itemIndex < 0 || itemIndex >= this.collection.length ) return -1;
    
    return Math.floor(itemIndex / this.itemsPerPage)
	}
}