const getAllCandidates = async () => {
  try {
    const resp = await fetch('http://localhost:3004/api/candidates');
    const candidates = await resp.json();

    return candidates;
  } catch (error) {
    throw Error('Ohhps');
  }
};

const createCandidate = job => {
  return job;
};

export { getAllCandidates, createCandidate };
