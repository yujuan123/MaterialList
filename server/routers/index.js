const regRouter = (app)=> {
  app.use('/materials',require('./materials'));
};

export default regRouter;