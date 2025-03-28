
function ContainerUser() {

    const StTitle = "font-bold";
    const SyLabel = "flex gap-2 ";

    return (
        <section className="bg-white/20 backdrop-blur-xl border-1 border-white rounded-2xl || p-2.5 ">
            <div className="flex flex-col">
                <div>
                    <label className={SyLabel}>
                        <span className={StTitle}>Name:</span>
                        <span>Lucas Carvalho Pedrozo</span>
                    </label>

                    <label className={SyLabel}>
                        <span className={StTitle}>CPF:</span>
                        <span>121.056.259-67</span>
                    </label>
                </div>

                <div>
                    <label className={SyLabel}>
                        <span className={StTitle}>Email:</span>
                        <span>lucaspedrozo@hotmail.com</span>
                    </label>

                    <label className={SyLabel}>
                        <span className={StTitle}>Password:</span>
                        <span>sbf8ywhfe2</span>
                    </label>
                </div>
            </div>
        </section>
    );
}

export default ContainerUser;