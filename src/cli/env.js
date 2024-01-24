const parseEnv = () => {
    const paramsStartFrom = 2
    const filterBy = 'RSS_'
    const args = process.argv.slice(paramsStartFrom).filter((arg) => arg.includes(filterBy)).join('; ');

    console.log(args);
};

parseEnv();
