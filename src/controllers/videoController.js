export const trending = (req, res) => {
  res.render("home");
};

export const edit = (req, res) => {
  return res.send(
    `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Edit video #${req.params.id}</h1><footer>&copy;2022 Wetube -  All rights reserved</footer></body></html>`
  );
};

export const search = (req, res) => res.send("Search");
export const see = (req, res) => {
  return res.send(
    `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Watch video #${req.params.id}</h1><footer>&copy;2022 Wetube -  All rights reserved</footer></body></html>`
  );
};
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload Video");
