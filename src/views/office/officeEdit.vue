<template>
  <ContentWrapper>
    <div class="container">
      <div class="content-heading text-center">
        <h1>Add New Office</h1>
      </div>
      <form class="jumbotron jumbotron-fluid">
          <div class="form-group">
        <button type="button" class="close text-danger" aria-label="Close">
          <span aria-hidden="true"><i class="far fa-times-circle"></i></span>
        </button>
        </div>
        <div class="form-group">
          <label for="inputName">Name</label>
          <input type="text" class="form-control" id="inputName" />
        </div>

        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-group text-center">
        <button type="submit" class="btn btn-lg btn-primary">Save</button>
        <button type="submit" class="btn btn-lg btn-danger ml-2">Cancel</button>
        </div>
      </form>
    </div>
  </ContentWrapper>
</template>

<script>
export default {
    
   
};
</script>