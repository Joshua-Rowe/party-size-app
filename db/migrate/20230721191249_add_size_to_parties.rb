class AddSizeToParties < ActiveRecord::Migration[7.0]
  def change
    add_column :parties, :size, :integer
  end
end
