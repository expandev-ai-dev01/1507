import type { HomePageProps } from './types';

/**
 * @page HomePage
 * @summary Home page - landing page for the TODO list application
 * @domain core
 * @type page-component
 * @category public
 *
 * @routing
 * - Path: /
 * - Public access
 *
 * @description
 * Welcome page that introduces the TODO list application and its features.
 * Provides navigation to main application sections.
 */
export const HomePage = (props: HomePageProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Bem-vindo ao TODO List</h2>
        <p className="text-xl text-gray-600 mb-8">Sistema completo de gerenciamento de tarefas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Criação de Tarefas</h3>
          <p className="text-gray-600">
            Crie tarefas com título, descrição, data de vencimento e prioridade
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Categorização</h3>
          <p className="text-gray-600">
            Organize suas tarefas em categorias e listas personalizadas
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Prioridades</h3>
          <p className="text-gray-600">
            Classifique tarefas por nível de importância (alta, média, baixa)
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Prazos</h3>
          <p className="text-gray-600">Defina datas limite para conclusão das suas tarefas</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Notificações</h3>
          <p className="text-gray-600">Receba alertas sobre tarefas próximas do vencimento</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Sincronização</h3>
          <p className="text-gray-600">Acesse suas tarefas em diferentes dispositivos</p>
        </div>
      </div>

      <div className="text-center">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
          Começar Agora
        </button>
      </div>
    </div>
  );
};

export default HomePage;
